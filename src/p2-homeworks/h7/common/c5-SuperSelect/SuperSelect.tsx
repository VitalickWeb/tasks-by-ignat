import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
    value?: string
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    // console.log(options, onChange, onChangeOption)

    const mappedOptions = options && options.map(op => {
        console.log(op)
        return (
            <option key={op}>
                {op}
            </option>
        )
    }); // map options with key
    // console.log(mappedOptions)

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
