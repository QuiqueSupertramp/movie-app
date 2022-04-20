const movieFetch = async url => {
	try {
		const res = await fetch(url);
		const json = await res.json();

		if (res.ok) {
			return {
				data: json,
				success: res.ok,
				error: false,
			};
		}

		if (res.status === 401) {
			return {
				data: null,
				success: json.success,
				error: {
					code: json.status_code,
					message: json.status_message,
				},
			};
		}

		if (res.status === 404) {
			return {
				data: null,
				success: json.success,
				error: {
					code: json.status_code,
					message: json.status_message,
				},
			};
		}

		return {
			data: null,
			success: res.ok,
			error: {
				code: json.status_code,
				message: json.status_message,
			},
		};
	} catch (error) {
		return {
			data: null,
			success: false,
			error: error,
		};
	}
};

export default movieFetch;
