import React from 'react'
import Report from "./Report";

const ReportContainer = ({buttonTitle, title}) => {

    const reportItems = [
        {title: 'Тип данных (наименование отчёта)', value: '12345678901234567890'},
        {title: 'УНП', value: '12345678BY'},
        {title: 'Регистрационный номер СКО в СККО', value: '121345454342'},
        {title: 'Дата, время открытия смены', value: '29.04.2019 09:01:33'},
        {title: 'Дата и время формирования (печати) суточного (сменного) отчета (Z-отчета)', value: '29.04.2019 09:01:33'},
        {title: 'Порядковый номер суточного (смен¬ного) отчета (Z-отчета)', value: '32425646'},
        {title: 'Количество платежных документов в суточном (сменном) отчете (Z-отчете)', value: '123'},
        {title: 'Номер первого платежного документа в суточном (сменном) отчете (Z-отчете)', value: '1'},
        {title: 'Номер последнего платежного документа в суточном (сменном) отчете (Z-отчете)', value: '123'},
        {title: 'Число валют', value: 'BYN'},
        {title: 'Число платежных документов по валюте', value: '123 - BYN'},
        {title: 'Число платежных документов по валюте', value: '123 - BYN'},
        {title: 'Число платежных документов по валюте', value: '123 - BYN'},
    ];

    return (
        <Report buttonTitle={buttonTitle} title={title} reportItems={reportItems} />
    )
};


export default ReportContainer