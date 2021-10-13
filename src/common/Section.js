import './section.css'

export function Section(props) {
  return (
    <div className="section" id={props.id}>
      <div className="section-header">
        <span>{props.header}</span>
      </div>
      {props.children}
    </div>
  )
}