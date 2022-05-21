import { FC } from 'react'
import withInnerWidth from './MyComponentWithInnerWidth'


type Props={
    innerWidth:number
}

const MyComponent: FC<Props> = ({ innerWidth }) => {
    return (
        <div>
            <h1>withInnerWidth:</h1>
            <div>withInnerWidth: {innerWidth}</div>
        </div>
    )
}

const MyComponentWithInnerWidth = withInnerWidth(MyComponent)

export default MyComponentWithInnerWidth