export async function downloadCv() {
    const CV_URL = '/assets/GuiraoNahuelCV.pdf'

    try {
        const response = await fetch(CV_URL);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'GuiraoNahuelCV.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Error downloading the PDF: ', error)
    }
}