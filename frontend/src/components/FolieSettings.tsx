
type FolieSettingsProps = {
    folieTotalLength: number,
    onFolieChange: (value: number) => void
}

export default function FolieSettings({ folieTotalLength, onFolieChange }: FolieSettingsProps) {


    return (
        <div>
            <label htmlFor="totalFolieLength">Folie total Length (mm)</label>
            <input type="number" value={folieTotalLength} onChange={(e) => onFolieChange(Number(e.target.value))}/>
        </div>
    )
}