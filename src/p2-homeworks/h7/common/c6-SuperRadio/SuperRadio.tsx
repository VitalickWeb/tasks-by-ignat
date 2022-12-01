import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps, useState} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: Array<string>
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    console.log()
    const mappedOptions: any[] = options ? options.map((op, i) => ( // map options with key

        <label key={name + '-' + i}>
            <input onChange={onChangeCallback} {...restProps}
                   type={"radio"}
                   checked={value === op}
                   value={op}
                   name={name}
                // name, checked, value, onChange
            />
            {op}
        </label>
    )) : []

    return (
        <form>
            {mappedOptions}
        </form>
    )
}

export default SuperRadio
