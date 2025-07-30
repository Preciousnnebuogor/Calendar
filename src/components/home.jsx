

export default function Home(){
  const date = new Date()
  const resultMonth = date.toLocaleString("en", { month: "long" });
  const day = date.getDate()
  const resultDay = date.toLocaleString("en", { weekday: "long" });
  const year = date.getFullYear()
  return (
    <div className="container">
      <div className="content">
        <div className="border">
          <div className="month">
            <p>{resultMonth}</p>
          </div>
          <div className="others">
            <p className="param">{resultDay}</p>
            <p className="number">{day}</p>
            <p className="param">{year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}