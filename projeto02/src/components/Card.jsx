


export function Card({ title, headline, text }) {
    return (   
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-4">
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <h2 className="text-gray-700 text-base">{headline}</h2>
            <p className="text-gray-700 text-base">{text}</p>
        </div>
    </div>
    );
}