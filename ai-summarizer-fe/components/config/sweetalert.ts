import Swal, { SweetAlertOptions } from 'sweetalert2'

export const showAlertError = (errMessage: string | any,  option?: SweetAlertOptions) => Swal.fire({
    title: "Oops...",
    text: errMessage,
    icon: 'error',
    confirmButtonText: 'Cool',
    ...option
});
export const showAlertSuccess = (message: string | any,  option?: SweetAlertOptions) => Swal.fire({
    title: 'SUCCESS',
    text: message,
    icon: 'success',
    ...option
    //   confirmButtonText: 'Cool'
});
export const showAlertQuestion = (question: string | any, option?: SweetAlertOptions) => Swal.fire({
    // title: 'Confirm',
    text: 'Do you want to continue?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: "Continue",
    ...option
});