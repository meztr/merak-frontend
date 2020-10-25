import { i18n } from '../i18n';
import styled from '@emotion/styled';
import { useContext } from 'react';
import { I18nContext } from 'next-i18next';

function LangSwitcher() {
    const {
        i18n: { language }
    } = useContext(I18nContext);

    return (
        <LangSwitcherStyled>
            <button
                type="button"
                onClick={() => i18n.changeLanguage('id')}
                className={language === 'id' ? 'is-active' : ''}>
                ID
            </button>
            <button
                type="button"
                onClick={() => i18n.changeLanguage('en')}
                className={language === 'en' ? 'is-active' : ''}>
                EN
            </button>
        </LangSwitcherStyled>
    );
}

const LangSwitcherStyled = styled.div`
    button.is-active {
        background: #cacaca;
        color: #fff;
    }
`;

export default LangSwitcher;
