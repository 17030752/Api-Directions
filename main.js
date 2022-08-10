const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa92cfa170mshb7c660c26113533p1152c6jsnaea351473feb',
		'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
	}
};

const fetchIpInfo = ip =>{
    return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, OPTIONS)
    .then(res => res.json())
    .catch(err => console.error(err))
}

//hack learned by @midudev
const $ = selector => document.querySelector(selector)

const $form =$('#form')
const $input =$('#input')
const $submit =$('#submit')
const $results =$("#results")


$form.addEventListener('submit', async (e)=>{
    e.preventDefault()
    //get value from attribute
    const {value} =$input
    if (!value) return
    $submit.setAttribute('disabled','')
    $submit.setAttribute('aria.busy','true')

    const ipInfo = await fetchIpInfo(value)
    if (ipInfo) {
        $results.innerHTML= JSON.stringify(ipInfo,null,2)
    }

    $submit.removeAttribute('disabled')
    $submit.removeAttribute('aria-busy')
})