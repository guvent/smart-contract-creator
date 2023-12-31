import { useAppDispatch, useAppSelector } from "../app/hooks";

export default function useCompileContract() {
    const contract = useAppSelector((state) => state.default.compile);
    const options = useAppSelector((state) => state.default.options);

    const dispatch = useAppDispatch();

    const compile = async () => {
        const response = await fetch(process.env.REACT_APP_SERVER_URL, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                contract,
                options,
            }),
        });

        if (response.ok) {
            const payload = await response.json();
            dispatch({
                type: "default/fillDetails",
                payload,
            });
            return payload;
        }

        return null;
    };

    return {
        compile,
        contract,
        options,
    };
}
