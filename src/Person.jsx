// src/Person.jsx
export function Person(props) {

    return <div className={
        "my-div " +
        (props.age >= 18 ? "valid-age" : "invalid-age")
    }>
        <p>Hey I am {props.name.toUpperCase()}.</p>
    </div>
}

// 1. conditionally render text
// 2. conditionally render classNames(styles)
// 3. conditionally render Custom components