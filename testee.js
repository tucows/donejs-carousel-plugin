module.exports = {
	//   "reporter": "spec",
    "browsers": [
        {
            "browser": "chrome",
            "args": [
                "--headless",
							/*
                "--disable-gpu",
                "--disable-extensions",
                "--no-sandbox",
								*/
                "--remote-debugging-port=9222"
            ]
        }
    ],
	/*
    "coverage": {
        "dir": "coverage",
        "ignore": ["node_modules"]
    }
	*/
		
};
