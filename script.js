imask(document.querySelector('#cc-cvv'),{
    mask:'0000'
})

Imask(document.querySelector('#cc-number'),{
    mask: '0000 0000 0000 0000'
})

imask(document.querySelector('#cc-validity'),{
    mask: 'MM{/}YY',
    blocks:{
        MM:{
            mask: Imask.maskedrange,
            from: 1,
            to: 12,
        },
        YY:{
            mask: Imask.maskedrange,
            from: string (new Date().getfullyear()).slice(2),
            to: string(new Date().getfullyear() + 10).slice(2),
        }
    }
})