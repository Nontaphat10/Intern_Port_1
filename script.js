var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0"; /* ทำให้ Navbar ปรากฎอยู่ด้านบนเมื่อเลื่อนขึ้น */
  } else {
    document.querySelector(".navbar").style.top = "-100px"; /* ทำให้ Navbar ซ่อนเมื่อเลื่อนลง */
  }
  prevScrollpos = currentScrollPos;
}




function scrollToNew() {
  event.preventDefault(); // หยุดการทำงานของลิงก์
  var newUpdateSection = document.getElementById('new-update-section');
  newUpdateSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
function scrollToport() {
  var newUpdateSection = document.getElementById('port');
  newUpdateSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function scrollTofooter() {
  var newUpdateSection = document.getElementById('footer');
  newUpdateSection.scrollIntoView({ behavior: 'smooth' });
}