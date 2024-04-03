import React from 'react'

const Refund = () => {
  return (
    <main className='flex flex-col justify-center pt-20 gap-8 px-5'> 
      <h2 className='text-2xl uppercase tracking-wider font-bold text-center'>Returns & Refunds</h2>
      <section >
        <p className='text-xs italic px-1'>
          Edenmen is glad to accept returns of online-purchased products that are undamaged, unworn, and/or defective <span className='font-semibold'>* within 30 days *</span> of the original purchase date.
          If you&apos;re not happy with your purchase, we can simply set you up with a refund or an exchange. To request a return or exchange, just get in touch with us within 30 days of receiving the item.
        </p>
      </section>
      <section className=''>
        <h3 className='font-semibold opacity-80'>RETURN/EXCHANGE CONDITIONS:</h3>
        <ol className='text-sm list-decimal pl-5 mt-1'>
          <li>Returns of items must be made within 30 days following the delivery date.</li>
          <li>The items need to be in their original tags, unwashed, and unworn.</li>
          <li>Final sale and clearance items are neither returnable nor exchangeable.</li>
          <li>Free gifts cannot be returned or refunded.</li>
        </ol>
      </section>
      <section>
      <h3 className='font-semibold opacity-80'>HOW TO RETURN:</h3>
        <ol className='text-sm list-decimal pl-5 mt-1'>
          <li>Contact Customer Service with order information and a brief description of your reason, indicate if you would like a refund or would prefer an exchange. When requesting an exchange, please provide the style, size and color of the new item you wish to receive.</li>
          <li>We will review your request and get back to you asap.</li>
          <li>If your return request is approved, please be sure to indicate your name, address, order number and reason for the return on a separate piece of paper. Then put the paper inside your package along with the item(s) you are going to return and pack the item properly.</li>
          <li>Send item(s) back to us through local post office. If you are in urgent need of handling the returned parcels, please contact our customer service and provide a tracking number for the returned parcels.</li>
          <li>We will process your return within 5 business days after we receive your parcel.</li>
        </ol>

      </section>
    </main>
  )
}

export default Refund