# React

## Memoizing a component with memo

Si tenemos un componente como `App` que tiene un subcomponente como `List`, cuando se cambia el estado se rerenderiza el componente `App` y todos los subcompoentes: `List`, `Task`, ...

Supongamos que cambiamos el estado `task`:

```js
const [task, setTask] = useState('') //Tarea
```

Cuando se cambia este estado se rerenderiza todo `App`, incluyendo el componente `List`, __que no usa el estado *task*__. Para evitar esto podemos usar __memo__. Con memo envolvemos el componente y salvo que alguna de sus propiedades cambie, memo rerenderizara el componente tal y como estaba.

```js
import { FC, useEffect, memo } from 'react'

...

export default memo(List)
```

### More

"The memo High Order Component (HOC) is similar to PureComponent of a React class
because it performs a shallow comparison of the props (meaning a superficial check), so if
we try to render a component with the same props all the time, the component will render
just once and will memorize. The only way to re-render the component is when a prop
changes its value.

```js
import { FC, useEffect, memo } from 'react'

...

export default memo(Task)
```

Only when the properties of `Task` change is the component re-rendered. We do the same with `List`

```js
export default memo(List)
```

When we do type something in the App, the properties of `List` and `Task` do not change, so there is no re-rendering of these components - just the App component re-renders.

At this point, you're probably thinking that the correct way is to always add memo to our components, or maybe you're thinking why React doesn't do this by default for us?. The reason is performance, which means it is not a good idea to add memo to all our components unless it is totally necessary, otherwise, the process of shallow comparisons and memorization will have inferior performance than if we don't use it.

## useMemo

Si tenemos alguna funcion que solo queremos ejecutar entre re-renmders cuando cambien sus argumentos - quizás porque sea costosa de ejecutar - podemos usar _useMemo_:

```js
  const filteredTodoList = useMemo(() => todoList.filter((todo: Todo) => {
    console.log('Filtering...')
    return todo.task.toLowerCase().includes(term.toLowerCase())
  }), [term, todoList])
```

Con esto cada vez que se re-renderiza App, solamente se vuelve a calcular `filteredTodoList` si `term` o `todoList` cambian.

## useCallback

En `App` definimos una función para borrar items, que luego pasamos como una propiedad más al componente `List`. Cada vez que se re-renderice `App` se creara una nueva versión de esta función, y por lo tanto - incluso usando *memo* - se tendrá que re-renderizar `List`. Si queremos evitarlo podemos usar `useCallback`:

```js
const handleDelete = useCallback((taskId: number) => {
    const newTodoList = todoList.filter((todo: Todo) => todo.id !== taskId)
    setTodoList(newTodoList)
}, [todoList])
```

