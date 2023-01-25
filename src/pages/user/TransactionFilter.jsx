import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BiChevronRight } from 'react-icons/bi'
import { setFiltered } from '../../app/actions/transactionActions';
import {
    Flex,
    Badge,
    Text
} from '@chakra-ui/react'

export default function Filter({ currentFilter, className }) {
    const dispatch = useDispatch();
    const [isShow, setShow] = useState(false);
    const items = [
        { as: "", name: "Todos", onClick: () => setFilter("") },
        { as: "Ingreso", name: "Ingresos", onClick: () => setFilter("Ingreso") },
        { as: "Egreso", name: "Egresos", onClick: () => setFilter("Egreso") }
    ]

    function setFilter(filter) {
        dispatch(setFiltered(filter));
    }

    function handleShow() {
        setShow(!isShow);
    }

    function handleClose() {
        setShow(false);
    }

    return (
        <div>
            <Flex align={'center'} onClick={handleShow}>
                <Text cursor={'pointer'} fontWeight={'bold'}>Filtrar</Text>
                <BiChevronRight fontSize={'20px'} style={{ 'paddingTop': '4px' }} />
                <h1 style={{'cursor': 'pointer'}}>{currentFilter ? currentFilter + 's' : "Todos"}</h1>
            </Flex>
            {isShow &&
                <div>
                    <ul>
                        {items?.map((item, i) => {
                            return <li style={{'listStyle': 'none'}} key={i} onClick={handleClose}>
                                {currentFilter !== item.as &&
                                    <p
                                        onClick={item.onClick}
                                    >
                                        <Badge cursor={'pointer'}>{item.name}</Badge>
                                    </p>
                                }
                            </li>
                        })}
                    </ul>
                </div>
            }
        </div>
    )
}