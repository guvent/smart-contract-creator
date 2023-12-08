import React, { useState } from "react";
import Checkbox from "../../components/Checkbox";
import Textbox from "../../components/Textbox";
import Button from "../../components/Button";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";

export default function ERC721() {
    const navigator = useNavigate();
    const dispatch = useAppDispatch();
    const options = useAppSelector((state) => state.default.options);

    const [erc721, setErc721] = useState({
        type: "erc721",
        baseUri: "",
        uriStorage: false,
        enumerable: false,
        incremental: true,
        mintable: true,
        pausable: true,
        burnable: true,
        votes: false,
    });

    const handleContinue = () => {
        dispatch({
            type: "default/fillOptions",
            payload: {
                name: options.name,
                symbol: options.symbol,
                ...erc721,
            },
        });
        navigator("/code");
    };

    return (
        <div onClick={() => console.log()} className="w-full md:w-1/2 lg:w-1/3">
            <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-green-500 rounded-lg">
                    <svg
                        width="24"
                        height="21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17 18.63H5C4.20435 18.63 3.44129 18.3139 2.87868 17.7513C2.31607 17.1887 2 16.4257 2 15.63V7.63C2 7.36479 1.89464 7.11043 1.70711 6.9229C1.51957 6.73536 1.26522 6.63 1 6.63C0.734784 6.63 0.48043 6.73536 0.292893 6.9229C0.105357 7.11043 0 7.36479 0 7.63L0 15.63C0 16.9561 0.526784 18.2279 1.46447 19.1655C2.40215 20.1032 3.67392 20.63 5 20.63H17C17.2652 20.63 17.5196 20.5246 17.7071 20.3371C17.8946 20.1496 18 19.8952 18 19.63C18 19.3648 17.8946 19.1104 17.7071 18.9229C17.5196 18.7354 17.2652 18.63 17 18.63ZM21 0.630005H7C6.20435 0.630005 5.44129 0.946075 4.87868 1.50868C4.31607 2.07129 4 2.83436 4 3.63V13.63C4 14.4257 4.31607 15.1887 4.87868 15.7513C5.44129 16.3139 6.20435 16.63 7 16.63H21C21.7956 16.63 22.5587 16.3139 23.1213 15.7513C23.6839 15.1887 24 14.4257 24 13.63V3.63C24 2.83436 23.6839 2.07129 23.1213 1.50868C22.5587 0.946075 21.7956 0.630005 21 0.630005ZM20.59 2.63L14.71 8.51C14.617 8.60373 14.5064 8.67813 14.3846 8.7289C14.2627 8.77966 14.132 8.8058 14 8.8058C13.868 8.8058 13.7373 8.77966 13.6154 8.7289C13.4936 8.67813 13.383 8.60373 13.29 8.51L7.41 2.63H20.59ZM22 13.63C22 13.8952 21.8946 14.1496 21.7071 14.3371C21.5196 14.5246 21.2652 14.63 21 14.63H7C6.73478 14.63 6.48043 14.5246 6.29289 14.3371C6.10536 14.1496 6 13.8952 6 13.63V4L11.88 9.88C12.4425 10.4418 13.205 10.7574 14 10.7574C14.795 10.7574 15.5575 10.4418 16.12 9.88L22 4V13.63Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </div>
                <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
                    ERC721 Token
                </h3>
                <hr className="my-4 w-full min-w-max" />
                <Textbox
                    small
                    placeholder={"Base URI"}
                    type={"url"}
                    value={erc721.baseUri}
                    onChange={(v) => setErc721((s) => ({ ...s, baseUri: v }))}
                />
                <hr className="my-4 w-full min-w-max" />
                <p className="text-coolGray-500 font-medium py-4 justify-center inline-flex flex-col h-80">
                    <Checkbox
                        id={"erc-721-uriStorage"}
                        title={"URI Storage"}
                        description={"Default checkbox"}
                        value={erc721.uriStorage}
                        onChange={(v) =>
                            setErc721((s) => ({ ...s, uriStorage: v }))
                        }
                    />
                    <Checkbox
                        id={"erc-721-mintable"}
                        title={"Mintable"}
                        description={"Default checkbox"}
                        value={erc721.mintable}
                        onChange={(v) =>
                            setErc721((s) => ({ ...s, mintable: v }))
                        }
                    />
                    <Checkbox
                        id={"erc-721-pausable"}
                        title={"Pausable"}
                        description={"Default checkbox"}
                        value={erc721.pausable}
                        onChange={(v) =>
                            setErc721((s) => ({ ...s, pausable: v }))
                        }
                    />
                    <Checkbox
                        id={"erc-721-burnable"}
                        title={"Burnable"}
                        description={"Default checkbox"}
                        value={erc721.burnable}
                        onChange={(v) =>
                            setErc721((s) => ({ ...s, burnable: v }))
                        }
                    />
                    <Checkbox
                        id={"erc-721-votes"}
                        title={"Votes"}
                        description={"Default checkbox"}
                        value={erc721.votes}
                        onChange={(v) => setErc721((s) => ({ ...s, votes: v }))}
                    />
                    <Checkbox
                        id={"erc-721-incremental"}
                        title={"Incremental"}
                        description={"Default checkbox"}
                        value={erc721.incremental}
                        onChange={(v) =>
                            setErc721((s) => ({ ...s, incremental: v }))
                        }
                    />
                    <Checkbox
                        id={"erc-721-enumerable"}
                        title={"Enumerable"}
                        description={"Default checkbox"}
                        value={erc721.enumerable}
                        onChange={(v) =>
                            setErc721((s) => ({ ...s, enumerable: v }))
                        }
                    />
                </p>
                <hr className="w-full min-w-max mb-4 mt-0 pt-0" />
                <Button title={"Continue"} onClick={handleContinue} />
            </div>
        </div>
    );
}
