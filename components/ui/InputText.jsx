import styles from '../../styles/components/ui/InputText.module.scss'

export default function InputText(props) {
  return (
    <input 
      type="text"
      id={props.name}
      name={props.name}
      placeholder={props.placeholder}
      autoComplete={props.autoComplete}
      aria-required={props.required}
      onChange={props.onChange}
      value={props.value}
      className={styles.InputText}
    />
  )
}