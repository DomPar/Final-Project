import { useEffect, useRef } from "react"
import EditIcon from '@mui/icons-material/Edit';

const UploadWidgetAvatar = ({setter}) => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
        useEffect(() => {
            cloudinaryRef.current = window.cloudinary;
            widgetRef.current = cloudinaryRef.current.createUploadWidget({
                cloudName: 'dytjoh7oh',
                uploadPreset: 'zax5qsda'
            }, function(error, result) {
                if (result.event === 'success') {
                    setter(result.info.url)
                }
            })
        }, []);
    return (
    <button id="button-upload" style={{height: 30, width: 30, boxShadow:"none", backgroundColor: 'rgba(255, 255, 255, 0)' }} onClick={() => widgetRef.current.open()}>
        <EditIcon/>
    </button>)
}


export default UploadWidgetAvatar