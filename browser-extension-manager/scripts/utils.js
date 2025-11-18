export async function loadJsonFile(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Could not load file at ${filePath}: ${response.statusText}`);
        }
        return await response.json();
    } catch(error) {
        console.error("Error loading JSON file:", error);
        return null;
    }
}

export async function loadTemplate(filePath) { 
    const response = await fetch(filePath);
    const text = await response.text();
    
    return text;
}