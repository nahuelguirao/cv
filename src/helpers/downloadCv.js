export async function downloadCv(language) {
    const CV_URL_ES = '/assets/GuiraoNahuelCV.pdf'
    const CV_URL_EN = '/assets/GuiraoNahuelCVen.pdf'

    try {
        const response = await fetch(language == 'es' ? CV_URL_ES : CV_URL_EN);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        // Sets the download
        link.setAttribute('download', 'GuiraoNahuelCV.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Error downloading the PDF: ', error)
    }
}