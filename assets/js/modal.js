export const modalInfo = (title, text, icon) => {

        Swal.fire({
            title: `${title}`,
            text: `${text}`,
            icon: `${icon}`,
            showCancelButton: false,
            confirmButtonText: 'OK'
        });

}