export default function TabDesc({title, desc, code}){

    return(
        <div className="tab-desc">
            <h2>{title}</h2>
            <p>{desc}</p>
            <pre><code>{code}</code></pre>
        </div>
    )
}