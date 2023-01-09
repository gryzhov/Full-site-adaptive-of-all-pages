
$(function () {
	var mixer = mixitup('.rankings__content', {
		load: {
			filter: '.today'
		}
	});
})
$(function () {
	var mixer = mixitup('.nfts-collection__content', {
		load: {
			filter: '.nft'
		}
	});
})

$(function () {
	$('.header__burger').on('click', function () {
		$('.header__nav').toggleClass('active');
		$('body').toggleClass('lock');
	})
})
$(function () {
	var mixer = mixitup('.nft-cards__inner', {
		load: {
			filter: '.created'
		}
	});


	$('.header__burger').on('click', function () {
		$('.header__nav').toggleClass('active');
		$('body').toggleClass('lock');
	})

	clickboardIpnput.onclick = () => {
		navigator.clipboard.writeText('0x2d7251293561c23126088eb597d3c0b3e10f8b0f')
		successMessage.classList.add('active')
		setTimeout(() => successMessage.classList.remove('active'), 2000)
	}

	$('.profile-top__follow').on('click', function () {
		$('.profile-top__follow').toggleClass('profile-top__follow--image');
	})

})
function getTimeRemaining(endtime) {
	const total = Date.parse(endtime) - Date.parse(new Date());
	const seconds = Math.floor((total / 1000) % 60);
	const minutes = Math.floor((total / 1000 / 60) % 60);
	const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
	const days = Math.floor(total / (1000 * 60 * 60 * 24));

	return {
		total,
		days,
		hours,
		minutes,
		seconds
	};
}

function initializeClock(id, endtime) {
	const clock = document.getElementById(id);
	const daysSpan = clock.querySelector('.days');
	const hoursSpan = clock.querySelector('.hours');
	const minutesSpan = clock.querySelector('.minutes');
	const secondsSpan = clock.querySelector('.seconds');

	function updateClock() {
		const t = getTimeRemaining(endtime);

		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}

	updateClock();
	const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);



