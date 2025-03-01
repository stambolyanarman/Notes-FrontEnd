import { Input, NativeSelect, NativeSelectField, NativeSelectIndicator } from "@chakra-ui/react"

export default function Filters({filter, setFilter}){
    return(
        <div className="flex flex-col gap-5">
            <Input placeholder="Search" onChange={(e) => setFilter({...filter, search: e.target.value})}></Input>
                <NativeSelect.Root>
                    <NativeSelectField onChange={(e) => setFilter({...filter, sortOrder: e.target.value})}>
                        <option value="1">new one first</option>
                        <option value="2">old one first</option>
                    </NativeSelectField>
                <NativeSelectIndicator/> 
            </NativeSelect.Root>
        </div>
    )
}