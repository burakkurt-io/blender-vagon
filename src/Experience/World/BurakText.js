import * as THREE from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import Experience from '../Experience.js'

export default class BurakText {
	constructor() {
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.config = this.experience.config

		this.loadFont()
	}

	loadFont() {
		const loader = new FontLoader()
		loader.load(
			'https://threejs.org/examples/fonts/helvetiker_bold.typeface.json',
			(font) => { this.createText(font) }
		)
	}

	createText(font) {
		const text = 'BURAK KURT'
		const textOptions = {
			font,
			size: 0.28,
			height: 0.02,
			curveSegments: 6,
			bevelEnabled: false,
		}

		const material = new THREE.MeshBasicMaterial({
			color: '#dcecff',
		})

		const characters = []
		let totalWidth = 0
		const tracking = 0.05
		const spaceWidth = 0.16

		for (const character of text) {
			if (character === ' ') {
				characters.push({ character, width: spaceWidth, geometry: null })
				totalWidth += spaceWidth + tracking
				continue
			}

			const geometry = new TextGeometry(character, textOptions)
			geometry.computeBoundingBox()
			const width = geometry.boundingBox.max.x - geometry.boundingBox.min.x
			const height = geometry.boundingBox.max.y - geometry.boundingBox.min.y
			geometry.translate(-width * 0.5, -height * 0.5, 0)

			characters.push({ character, width, geometry })
			totalWidth += width + tracking
		}

		totalWidth -= tracking

		this.model = new THREE.Group()

		// Kamera (8,2,8) konumundan 45 dereceyle bakiyor.
		// centerAngle = PI*0.25 taban cemberi kameraya en yakin noktayi gosterir.
		const center = new THREE.Vector3(0.55, this.config.globalPosition + 0.56, 0.55)
		const radius = 2.26
		const arcSpan = 1.05
		const centerAngle = Math.PI * 0.25
		let cursor = 0

		const layoutCharacters = [...characters].reverse()
		for (const item of layoutCharacters) {
			const glyphCenter = cursor + item.width * 0.5
			const normalized = totalWidth === 0 ? 0 : glyphCenter / totalWidth - 0.5
			const angle = centerAngle + normalized * arcSpan

			if (item.geometry) {
				const mesh = new THREE.Mesh(item.geometry, material)
				mesh.position.set(
					center.x + Math.cos(angle) * radius,
					center.y,
					center.z + Math.sin(angle) * radius
				)
				mesh.rotation.y = Math.PI * 0.5 - angle
				mesh.rotation.x = -0.03
				this.model.add(mesh)
			}

			cursor += item.width + tracking
		}

		this.scene.add(this.model)
	}

	resize() {}
	update() {}
	destroy() {
		if (this.model) {
			this.scene.remove(this.model)
		}
	}
}
