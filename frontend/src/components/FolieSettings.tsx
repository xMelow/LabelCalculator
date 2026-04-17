
type FolieSettingsProps = {
    folieTotalLength: number,
    onFolieChange: (value: number) => void
}

export default function FolieSettings({ folieTotalLength, onFolieChange }: FolieSettingsProps) {
    return (
        <div className="bg-white shadow-2xl rounded-2xl p-4">
            <h2 className="text-2xl font-bold text-altec-dark">Ink Folie Settings</h2>
            <div className="mt-4 flex gap-4">
                <div className="">
                    <label className="text-1xl text-gray-500 font-medium">Folie total Length (mm)</label>
                    <input className="mt-2 w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-altec-teal"
                           type="number" value={folieTotalLength}
                           onChange={(e) => onFolieChange(Number(e.target.value))}/>
                </div>
            </div>
        </div>
    )
}