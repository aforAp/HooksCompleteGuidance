export default function Input({textarea, label, ref, type}) {
    return <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
        {textarea ? <textarea type={type} className="inputArea" ref={ref}/> : <input type={type} ref={ref} className="inputArea"/>}
    </p>
}