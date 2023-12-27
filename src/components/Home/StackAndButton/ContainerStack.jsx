import { DownloadButton } from "./DonwloadButton";
import { MyStack } from "./MyStack";

export function ContainerStack({ translations }) {
    return (
        <div className='buttonsContainerGeneral'>

            <div className='buttonContainer'>
                <MyStack translations={translations} />
                <DownloadButton translations={translations} />
            </div>
        </div>
    )
}