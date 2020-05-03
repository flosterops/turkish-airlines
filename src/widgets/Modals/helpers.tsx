import * as React from 'react';
import { ModalTypes } from 'models/UIEnums';
// import { CreateFirmModal } from 'widgets/Modals/components/CreateFirmModal';
// import { CreateContractModal } from 'widgets/Modals/components/CreateContractModal';

const getModalComponent = (type: ModalTypes, options: any, closeModal) => {
    switch (type) {
        case ModalTypes.createContract:
            return null;
        case ModalTypes.createFirm:
            return null;
        case ModalTypes.infoModal:
            return null;
        default:
            return 'No such modal as type';
    }
};

{
    /*<CreateContractModal*/
}
{
    /*    options={options}*/
}
{
    /*    closeModal={closeModal}*/
}
{
    /*/>*/
}

{
    /*<CreateFirmModal*/
}
{
    /*    key={type}*/
}
{
    /*    closeModal={closeModal}*/
}
{
    /*    options={options}*/
}
{
    /*/>*/
}

export { getModalComponent };
