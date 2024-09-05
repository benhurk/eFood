import { useState } from "react";

import { Container, OptionsList, Option, Value, ExpandIcon, Label } from "./styled";

import downArrow from '../../assets/down-icon.svg';

type Props = {
    label: string;
    options: string[];
    value?: string;
    onChange: (value: string) => void;
}

export default function Select({label, value, options, onChange}: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Label>{label}</Label>
            <Container tabIndex={0} onClick={() => setIsOpen(prev => !prev)} onBlur={() => setIsOpen(false)}>
                <Value>{value ? value : 'Todos'}</Value>
                <ExpandIcon src={downArrow} />
                {
                    isOpen &&
                    <OptionsList>
                        <Option onClick={() => onChange('')}>Todos</Option>
                        {
                            options.map(option => (
                                <Option key={option} onClick={() => onChange(option)}>{option}</Option>
                            ))
                        }
                    </OptionsList>
                }
            </Container>
        </div>
    )
}