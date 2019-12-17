import './style.css'
import '../../components/index'

if (!localStorage.getItem('login')) {
  window.location.href = 'http://localhost:8080/'
}
