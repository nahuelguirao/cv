import { DownloadButton } from "./DonwloadButton";
import { MyStack } from "./MyStack";

export function ContainerStack() {
    return (
        <div className='buttonsContainerGeneral'>

            <div className='buttonContainer'>
                <MyStack />
                <DownloadButton />
            </div>
        </div>
    )
}