import React, { useState } from "react";
import Checkbox from "../../components/Checkbox";
import Textbox from "../../components/Textbox";
import Button from "../../components/Button";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";

export default function ERC1155() {
    const navigator = useNavigate();
    const dispatch = useAppDispatch();
    const options = useAppSelector((state) => state.default.options);

    const [erc1155, setErc1155] = useState({
        type: "erc1155",
        uri: "",
        mintable: true,
        pausable: true,
        burnable: true,
        supply: false,
        updatableUri: false,
    });

    const handleContinue = () => {
        dispatch({
            type: "default/fillOptions",
            payload: {
                name: options.name,
                symbol: options.symbol,
                ...erc1155,
            },
        });
        navigator("/code");
    };

    return (
        <div onClick={() => console.log()} className="w-full md:w-1/2 lg:w-1/3">
            <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-green-500 rounded-lg">
                    <svg
                        width="22"
                        height="18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.3 9.22C11.8336 8.75813 12.2616 8.18688 12.5549 7.54502C12.8482 6.90316 13 6.20571 13 5.5C13 4.17392 12.4732 2.90215 11.5355 1.96447C10.5979 1.02678 9.32608 0.5 8 0.5C6.67392 0.5 5.40215 1.02678 4.46447 1.96447C3.52678 2.90215 3 4.17392 3 5.5C2.99999 6.20571 3.1518 6.90316 3.44513 7.54502C3.73845 8.18688 4.16642 8.75813 4.7 9.22C3.30014 9.85388 2.11247 10.8775 1.27898 12.1685C0.445495 13.4596 0.00147185 14.9633 0 16.5C0 16.7652 0.105357 17.0196 0.292893 17.2071C0.48043 17.3946 0.734784 17.5 1 17.5C1.26522 17.5 1.51957 17.3946 1.70711 17.2071C1.89464 17.0196 2 16.7652 2 16.5C2 14.9087 2.63214 13.3826 3.75736 12.2574C4.88258 11.1321 6.4087 10.5 8 10.5C9.5913 10.5 11.1174 11.1321 12.2426 12.2574C13.3679 13.3826 14 14.9087 14 16.5C14 16.7652 14.1054 17.0196 14.2929 17.2071C14.4804 17.3946 14.7348 17.5 15 17.5C15.2652 17.5 15.5196 17.3946 15.7071 17.2071C15.8946 17.0196 16 16.7652 16 16.5C15.9985 14.9633 15.5545 13.4596 14.721 12.1685C13.8875 10.8775 12.6999 9.85388 11.3 9.22ZM8 8.5C7.40666 8.5 6.82664 8.32405 6.33329 7.99441C5.83994 7.66476 5.45542 7.19623 5.22836 6.64805C5.0013 6.09987 4.94189 5.49667 5.05764 4.91473C5.1734 4.33279 5.45912 3.79824 5.87868 3.37868C6.29824 2.95912 6.83279 2.6734 7.41473 2.55764C7.99667 2.44189 8.59987 2.5013 9.14805 2.72836C9.69623 2.95542 10.1648 3.33994 10.4944 3.83329C10.8241 4.32664 11 4.90666 11 5.5C11 6.29565 10.6839 7.05871 10.1213 7.62132C9.55871 8.18393 8.79565 8.5 8 8.5ZM17.74 8.82C18.38 8.09933 18.798 7.20905 18.9438 6.25634C19.0896 5.30362 18.9569 4.32907 18.5618 3.45C18.1666 2.57093 17.5258 1.8248 16.7165 1.30142C15.9071 0.77805 14.9638 0.499742 14 0.5C13.7348 0.5 13.4804 0.605357 13.2929 0.792893C13.1054 0.98043 13 1.23478 13 1.5C13 1.76522 13.1054 2.01957 13.2929 2.20711C13.4804 2.39464 13.7348 2.5 14 2.5C14.7956 2.5 15.5587 2.81607 16.1213 3.37868C16.6839 3.94129 17 4.70435 17 5.5C16.9986 6.02524 16.8593 6.5409 16.5961 6.99542C16.3328 7.44994 15.9549 7.82738 15.5 8.09C15.3517 8.17552 15.2279 8.29766 15.1404 8.44474C15.0528 8.59182 15.0045 8.7589 15 8.93C14.9958 9.09976 15.0349 9.2678 15.1137 9.41826C15.1924 9.56872 15.3081 9.69665 15.45 9.79L15.84 10.05L15.97 10.12C17.1754 10.6917 18.1923 11.596 18.901 12.7263C19.6096 13.8566 19.9805 15.1659 19.97 16.5C19.97 16.7652 20.0754 17.0196 20.2629 17.2071C20.4504 17.3946 20.7048 17.5 20.97 17.5C21.2352 17.5 21.4896 17.3946 21.6771 17.2071C21.8646 17.0196 21.97 16.7652 21.97 16.5C21.9782 14.9654 21.5938 13.4543 20.8535 12.1101C20.1131 10.7659 19.0413 9.63331 17.74 8.82Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </div>
                <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
                    ERC1155 Token
                </h3>
                <hr className="my-4 w-full min-w-max" />
                <Textbox
                    small
                    placeholder={"URI"}
                    type={"url"}
                    value={erc1155.uri}
                    onChange={(v) => setErc1155((s) => ({ ...s, uri: v }))}
                />
                <hr className="my-4" />
                <p className="text-coolGray-500 font-medium py-4 justify-center inline-flex flex-col h-80">
                    <Checkbox
                        id={"erc-1155-updatableUri"}
                        title={"Updatable URI"}
                        description={"Default checkbox"}
                        value={erc1155.updatableUri}
                        onChange={(v) =>
                            setErc1155((s) => ({ ...s, updatableUri: v }))
                        }
                    />
                    <Checkbox
                        id={"erc-1155-mintable"}
                        title={"Mintable"}
                        description={"Default checkbox"}
                        value={erc1155.mintable}
                        onChange={(v) =>
                            setErc1155((s) => ({ ...s, mintable: v }))
                        }
                    />
                    <Checkbox
                        id={"erc-1155-pausable"}
                        title={"Pausable"}
                        description={"Default checkbox"}
                        value={erc1155.pausable}
                        onChange={(v) =>
                            setErc1155((s) => ({ ...s, pausable: v }))
                        }
                    />
                    <Checkbox
                        id={"erc-1155-burnable"}
                        title={"Burnable"}
                        description={"Default checkbox"}
                        value={erc1155.burnable}
                        onChange={(v) =>
                            setErc1155((s) => ({ ...s, burnable: v }))
                        }
                    />
                    <Checkbox
                        id={"erc-1155-supply"}
                        title={"Supply"}
                        description={"Default checkbox"}
                        value={erc1155.supply}
                        onChange={(v) =>
                            setErc1155((s) => ({ ...s, supply: v }))
                        }
                    />
                </p>
                <hr className="w-full min-w-max mb-4 mt-0 pt-0" />
                <Button title={"Continue"} onClick={handleContinue} />
            </div>
        </div>
    );
}
