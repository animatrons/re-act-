import { useState } from 'react';

export const useFlexGrid = initialValues => {
    const [values, setValues] = useState(initialValues );

    return [
        values,
        e => {
            setValues({
                pastId: values.thisId,
                thisId: e.target.id
            });
        }
    ]
}