export function Body() {
  const data = {
    '1': ["https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", 1, ['Mobile', '2000MP with 110 cameras, 1000000 Mh battery, no charger, no earphone buy everything yourself at the cost more than mobile itself', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSygUO478sEDb_iAS5235O1yz6R5OQDmJLKoQ&usqp=CAU']],
    '2': ["https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", 2, ['Laptop', 'it is intel i7. macbook, cross platform development supported and virtualization disabled. no camera', 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_business-512.png']],
    '3': ["https://images.unsplash.com/photo-1617625802912-cde586faf331?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", 3, ['Smartwatch', 'best Smartwatch  with no additional features other than seeing time', 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png']],
    '4': ["https://plus.unsplash.com/premium_photo-1664300273542-25faf1e19fbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVkJTIwdHZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", 4, ['LED Tv', 'Led Tv with buttons and no remote, 2222volt power consumption, no dish antenna connection enabled', 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_business-512.png']]
  }
  const arr = Object.values(data)
  const ele = arr.map((el) => {
    return (
      <div class="row my-1 justify-content-center align-items-center">
        <div class="col-sm-4 my-3"><img src={el[0]} alt="thumbnail" class="img-fluid img-thumbnail"></img></div>
        <div class="col-sm-4 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#2196F3" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg><br></br>
          {el[1]}</div>
        <div class="col-sm-4">
          <p><h3 style={{ color: '#2196F3' }}>{el[2][0]}</h3></p><br></br>
          <p class="my-3 fw-bold">{el[2][1]}</p><br></br>
          <p class="text-secondary">submitted by :<img src={el[2][2]} alt="Profile 1" class="profile-icon"></img>
</p>
        </div>
      </div>
    )
  })





  return (
    <div class="container">
      {ele}
    </div>

  )

}