export default function Input({textarea, label, props}) {
    return <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
        {textarea ? <textarea {...props} className="inputArea"/> : <input {...props} className="inputArea"/>}
    </p>
}