import * as React from 'react';
import useForm, { useFormContext } from './src';

export default function Test() {
    const { register, watch, handleSubmit, setError, triggerValidation } = useFormContext();

    setError('asdasd');

    return <input name="what" ref={register} />
}
