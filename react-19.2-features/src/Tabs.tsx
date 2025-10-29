import React, { useMemo, useState } from 'react';

export type TabItem = {
	id: string;
	label: string;
	content: React.ReactNode;
};

type TabsProps = {
	items: TabItem[];
	defaultActiveId?: string;
};

// Minimal Tabs PoC that still uses React 19's <Activity> to keep panels mounted
export function Tabs({ items, defaultActiveId }: TabsProps) {
	const initial = defaultActiveId ?? items[0]?.id;
	const [activeId, setActiveId] = useState<string>(initial ?? items[0]?.id ?? '');

	return (
		<div>
			<div style={{ display: 'flex', gap: 8, borderBottom: '1px solid #eee', paddingBottom: 8, marginBottom: 12 }}>
				{items.map((item) => (
					<button
						key={item.id}
						onClick={() => setActiveId(item.id)}
						style={{
							padding: '6px 10px',
							border: 'none',
							borderBottom: item.id === activeId ? '2px solid #3b82f6' : '2px solid transparent',
							background: 'transparent',
							color: item.id === activeId ? '#111' : '#555',
							cursor: 'pointer',
							fontWeight: item.id === activeId ? 600 : 500,
						}}
					>
						{item.label}
					</button>
				))}
			</div>

			{items.map((item) => (
				<React.Activity key={item.id} mode={item.id === activeId ? 'visible' : 'hidden'} name={`Tab: ${item.label}`}>
					<div style={{ display: item.id === activeId ? 'block' : 'none' }}>{item.content}</div>
				</React.Activity>
			))}
		</div>
	);
}

// Tiny demo kept as `TabsDemo` so existing imports don't need changes
export function TabsDemo() {
	const items = useMemo<TabItem[]>(
		() => [
			{ id: 'one', label: 'One', content: <p>First tab content</p> },
			{ id: 'two', label: 'Two', content: <p>Second tab content</p> },
			{ id: 'three', label: 'Three', content: <p>Third tab content</p> },
		],
		[]
	);

	return <Tabs items={items} defaultActiveId="one" />;
}

