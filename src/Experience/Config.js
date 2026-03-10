import * as THREE from 'three'

export default class Config {
	constructor(targetElement) {
		// Pixel ratio
		this.pixelRatio = Math.min(Math.max(window.devicePixelRatio, 1), 2)
		// Width and height
		const boundings = targetElement.getBoundingClientRect()
		this.width = boundings.width
		this.height = boundings.height || window.innerHeight
		this.smallestSide = Math.min(this.width, this.height)
		this.largestSide = Math.max(this.width, this.height)

		// Debug
		// this.debug = window.location.hash === '#debug'
		this.debug = false

		// Colors
		this.backgroundColor = '#4b9bfb'
		this.lightColor = '#ffffe5'
		this.firefliersColor = '#f87c42'
		this.wordsShadowColor = '#010203'
		this.shadowColor = '#1364b5'
		this.fireColorUp = '#ffff9b'
		this.fireColorDown = '#fe8e12'
		this.owlEyesColor = '#7f490e'

		// World
		this.globalPosition = -1.5
		this.firefliesSize = 290
		this.firefliesSpeed = 4
		this.fireSpeed = 4
		this.portalSpeed = 4
		this.portalActive = false
		this.neutral = 1
		this.wireframe = false
		this.lifeCamera = true

		// Post Processing
		this.unrealBloomStrength = 0.32
		this.unrealBloomRadius = 1
		this.unrealBloomThreshold = 0.82
		this.unrealBloomMyPulseSpeed = 1
		this.unrealBloomMyWaveLength = 1.5
		this.unrealBloomMyStrength = 0.1

		// Loader
		this.html_loader = document.querySelector('.loader')
		this.html_loaderKey = document.querySelector('.loaderKey')
		this.html_loaderKeySvg = document.querySelector('.loaderKeySvg')

		// Music
		this.html_musicKey = document.querySelector('.musicKey')
		this.html_musicSvg = document.querySelector('.musicSvg')
		this.html_music = document.querySelector('.music')

		// Informers
		this.html_experience = document.querySelector('.experience')
		this.html_credits = document.querySelector('.credits')
		this.html_textBlock = document.querySelector('.information')

		this.icoBruno = `Bu proje, Three.js denemeleri ve sahne tasarımı odaklı kişisel bir çalışmadır.`

		this.icoGithub = `Kaynak kodlarını GitHub deposunda inceleyebilirsin:
			<a href="https://github.com/burakkurt-io/burakkurt-blender-vagon" target="_blank">
				<svg><use href="./social/icoGithub.svg#idIco"></use></svg>
				GitHub</a>`

		this.icoMail = `İletişim bağlantıları sağ alt köşedeki sosyal ikonlarda yer alıyor.`
			

		this.icoKaino = `Model Blender ile düzenlenmiştir ve bu sahne için optimize edilmiştir.`
		
		this.icoQuestionGrass = 'Burada 3469 adet çim bulunuyor. Çimler shader teknolojisi ile canlandırılıyor. Sitedeki tüm animasyonlar JavaScript ve GLSL ile üretildi.'
		this.icoQuestionOwl = 'Bu baykuş bir yere çok dikkatli bakıyor... ama nereye?'

		// Test
		this.testSpherePosition = 1
	}
}
