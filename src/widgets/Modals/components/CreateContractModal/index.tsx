import * as React from 'react';
import { useState } from 'react';
import {
    getInitialModal,
    getParamsModel
} from 'widgets/Modals/components/CreateContractModal/helpers';
import { Description } from 'ui/Description';
import { Column, Row } from 'ui/Layout';
import { Title } from 'ui/Title';
import { Icon } from 'ui/Icon';
import {
    AlignItemsTypes,
    ColorTypes,
    FontSizeTypes,
    IconTypes,
    JustifyContentTypes,
    TagNameTypes
} from 'models/UIEnums';
import { RequestTypes } from 'models/RequestTypes';
import { request } from 'helpers/request';
import config from './config.json';
import './style.scss';

const CreateContractModal = ({ closeModal, options }) => {
    const handleChange = (e: any, name: string) => {
        const { value } = e.target;
    };

    const onAddClick = () => {
        request(RequestTypes.post, '', null).then(res => {
            closeModal();
        });
    };

    return (
        <Column className="modal-crt-contr" jc={JustifyContentTypes.center}>
            <Row
                className="modal-crt-contr__header"
                jc={JustifyContentTypes.spaceBetween}
                ai={AlignItemsTypes.center}
            >
                <Title
                    color={ColorTypes.blue}
                    tagName={TagNameTypes.default}
                    fontSize={FontSizeTypes.l}
                    uppercase
                >
                    Title
                </Title>
                <Row
                    pointer
                    widthAuto
                    onClick={closeModal}
                    className="modal-crt-contr__close"
                >
                    <Icon
                        className="modal-crt-contr__close"
                        type={IconTypes.iconCloseBlack}
                    />
                </Row>
            </Row>
            <Column jc={JustifyContentTypes.spaceAround} fullHeight>
                {config.map(({ id, name, label, type }) => {
                    return (
                        <Column jc={JustifyContentTypes.flexStart} key={id}>
                            <Description className="modal-crt-contr__label">
                                {label}
                            </Description>
                            <input
                                type={type}
                                onChange={e => handleChange(e, name)}
                            />
                        </Column>
                    );
                })}
            </Column>
            <Column
                jc={JustifyContentTypes.flexEnd}
                ai={AlignItemsTypes.center}
                className="modal-crt-contr__footer"
            >
                <button
                    className="modal-crt-contr__button"
                    onClick={onAddClick}
                >
                    button
                </button>
            </Column>
        </Column>
    );
};

export { CreateContractModal };
