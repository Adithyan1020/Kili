import re
import sys

def main():
    input_file = "C:/Users/Adithyan/.gemini/antigravity/brain/1ad86365-ffc3-4305-b64a-8bb19b32d139/.system_generated/steps/182/content.md"
    output_file = "e:/kili_project/eli-app/src/components/MilitaryMap.jsx"
    
    with open(input_file, 'r', encoding='utf-8') as f:
        code = f.read()
        
    parts = code.split('---')
    if len(parts) > 1:
        code = '---'.join(parts[1:]).strip()
        
    # Remove framer import
    code = re.sub(r'import\s*\{[^}]*\}\s*from\s*["\']framer["\'];?', '', code)
    
    # Replace RenderTarget
    code = code.replace('RenderTarget.current()===RenderTarget.canvas', 'false')
    code = code.replace('RenderTarget.current() === RenderTarget.canvas', 'false')
    
    # Remove addPropertyControls
    apc_index = code.find('addPropertyControls(MilitaryMap,')
    if apc_index != -1:
        code = code[:apc_index]
        
    # Make sure default export exists
    if 'export default function MilitaryMap' not in code:
        code = code.replace('export function MilitaryMap', 'export default function MilitaryMap')
        
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(code)

if __name__ == '__main__':
    main()
