function PageTitle(props) {

    const { tuyauAuthorName, } = props;

    const showName = () => {
        return tuyauAuthorName;
    }
    return (
        <h1 className='app'>
            Auteur : <strong>{showName() !== '' ? showName().toUpperCase() : 'inconnu'}</strong>
        </h1>
    );
}

export default PageTitle;