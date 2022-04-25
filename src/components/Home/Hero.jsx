import React from 'react'

function Hero() {
	return (
		<div class="p-4 mb-5 text-center">
			<h1 class="display-4 fw-bold">Éttermi asztalfoglalás</h1>
			<div class="col-lg-6 mx-auto">
				<p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
				<div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
					<button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Tovább a foglaláshoz</button>
					<button type="button" class="btn btn-outline-secondary btn-lg px-4">Éttermeknek</button>
				</div>
			</div>
		</div>
	)
}

export default Hero