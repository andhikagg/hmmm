function toggleNavbar() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

function showPopup() {
    document.getElementById("popup").style.display = 'block';
    document.getElementById("popupOverlay").style.display = 'block';
}

function closePopup() {
    document.getElementById("popup").style.display = 'none';
    document.getElementById("popupOverlay").style.display = 'none';
}

window.onload = function() {
    showPopup();
const swaggerSpec = {
    "openapi": "3.0.0",
    "info": {
        "title": "Docs Yuki-chan APIs",
        "version": "1.0.1",
        "description": "Jalankan semangat mu, Sukseskan proyek mu bersama Yuki-chan APIs!"
    },
    "servers": [
        {
            "url": "https://ditz-apis-a2fb2c773048.herokuapp.com/api"
        }
    ],
    "paths": {
        "/stable-diffusion": {
            "get": {
                "summary": "",
                "description": "Create Images With Stable Diffusion 1.5!",
                "tags": ["AI Chat & Images"],
                "parameters": [
                    {
                        "name": "query",
                        "in": "query",
                        "description": "Prompt to create an images.",
                        "required": true,
                        "schema": {
                            "type": "string",
                            "example": "An serene sunset landscape where a river winds through gentle hills covered in trees. The sky is tinged with warm and soft tones, with scattered clouds reflecting the last glimmers of the sun."
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Successful response with result diffusion images",
                        "content": {
                            "image/jpeg": {
                                "schema": {
                                    "type": "string",
                                    "format": "binary"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Error! Query parameter is required"
                    },
                    "404": {
                        "description": "Resource not found or data is not valid"
                    },
                    "500": {
                        "description": "Internal server error"
                    }
                }
            }
        },
        "/chatgpt": {
            "get": {
                "summary": "",
                "description": "Tanya apapun, Pada ChatGPT!",
                "tags": ["AI Chat & Images"],
                "parameters": [
                    {
                        "name": "query",
                        "in": "query",
                        "description": "Mau cari apa sama ChatGPT?",
                        "required": true,
                        "schema": {
                            "type": "string",
                            "example": "Apa itu javascript?"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Successful response",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": {
                                            "type": "boolean",
                                            "example": true
                                        },
                                        "developer": {
                                            "type": "string",
                                            "example": "DitzOfc"
                                        },
                                        "result": {
                                            "type": "string",
                                            "example": "Result of chatgpt"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Error! query parameter is required"
                    },
                    "404": {
                        "description": "Resource not found or data is not valid"
                    },
                    "500": {
                        "description": "Internal server error"
                    }
                }
            }
        },
        "/youtube-downloader": {
            "get": {
                "summary": "",
                "description": "Downloads YouTube videos using the provided URL. The download will be canceled if the file size exceeds 50 MB.",
                "tags": ["Downloader"],
                "parameters": [
                    {
                        "name": "url",
                        "in": "query",
                        "description": "YouTube Downloader",
                        "example": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "format",
                        "in": "query",
                        "description": "Download format (audio or video)",
                        "required": true,
                        "schema": {
                            "type": "string",
                            "enum": ["audio", "video"],
                            "example": "video"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Successful response",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": {
                                            "type": "boolean",
                                            "example": true
                                        },
                                        "developer": {
                                            "type": "string",
                                            "example": "DitzOfc"
                                        },
                                        "result": {
                                            "type": "string",
                                            "example": "Link to downloaded video"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Error! URL parameter is required"
                    },
                    "413": {
                        "description": "File size exceeds 50 MB limit. Download canceled."
                    },
                    "500": {
                        "description": "Internal server error"
                    }
                }
            }
        },
        "/tiktok-search": {
            "get": {
                "summary": "",
                "description": "Cari semua media yang ingin kamu temukan, Di TikTok!",
                "tags": ["Search"],
                "parameters": [
                    {
                        "name": "query",
                        "in": "query",
                        "description": "Mau cari apa di tiktok?",
                        "required": true,
                        "schema": {
                            "type": "string",
                            "example": "JJ Anime terbaru"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Successful response",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": {
                                            "type": "boolean",
                                            "example": true
                                        },
                                        "developer": {
                                            "type": "string",
                                            "example": "DitzOfc"
                                        },
                                        "result": {
                                            "type": "string",
                                            "example": "Result of tiktok search"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Error! query parameter is required"
                    },
                    "404": {
                        "description": "Resource not found or data is not valid"
                    },
                    "500": {
                        "description": "Internal server error"
                    }
                }
            }
        },
        "/bukalapak": {
            "get": {
                "summary": "",
                "description": "Cari barang di bukalapak!",
                "tags": ["Search"],
                "parameters": [
                    {
                        "name": "query",
                        "in": "query",
                        "description": "Mau cari apa di bukalapak?",
                        "required": true,
                        "schema": {
                            "type": "string",
                            "example": "RTX 4090"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Successful response",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": {
                                            "type": "boolean",
                                            "example": true
                                        },
                                        "developer": {
                                            "type": "string",
                                            "example": "DitzOfc"
                                        },
                                        "result": {
                                            "type": "string",
                                            "example": "Result of BukaLapak Search"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Error! query parameter is required"
                    },
                    "404": {
                        "description": "Resource not found or data is not valid"
                    },
                    "500": {
                        "description": "Internal server error"
                    }
                }
            }
        },
        "/youtube-search": {
            "get": {
                "summary": "",
                "description": "Cari media di YouTube!",
                "tags": ["Search"],
                "parameters": [
                    {
                        "name": "query",
                        "in": "query",
                        "description": "Mau cari apa di YouTube?",
                        "required": true,
                        "schema": {
                            "type": "string",
                            "example": "Preset AM Old Serem"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Successful response",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": {
                                            "type": "boolean",
                                            "example": true
                                        },
                                        "developer": {
                                            "type": "string",
                                            "example": "DitzOfc"
                                        },
                                        "result": {
                                            "type": "string",
                                            "example": "Result of YouTube Search"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Error! query parameter is required"
                    },
                    "404": {
                        "description": "Resource not found or data is not valid"
                    },
                    "500": {
                        "description": "Internal server error"
                    }
                }
            }
        },
        "/instagram-dl": {
            "get": {
                "summary": "",
                "description": "Unduh media Instagram, By Shannz!",
                "tags": ["Downloader"],
                "parameters": [
                    {
                        "name": "url",
                        "in": "query",
                        "description": "Link IG?",
                        "required": true,
                        "schema": {
                            "type": "string",
                            "example": "https://www.instagram.com/reel/C8wANWVPVye/?igsh=YzljYTk1ODg3Zg=="
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Successful response",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": {
                                            "type": "boolean",
                                            "example": true
                                        },
                                        "developer": {
                                            "type": "string",
                                            "example": "DitzOfc"
                                        },
                                        "result": {
                                            "type": "string",
                                            "example": "Result link download of Instagram Downloader"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Error! url parameter is required"
                    },
                    "404": {
                        "description": "Resource not found or data is not valid"
                    },
                    "500": {
                        "description": "Internal server error"
                    }
                }
            }
        },
        "/tiktok": {
            "get": {
                "summary": "",
                "description": "Unduh media TikTok, Support Video & Slide!",
                "tags": ["Downloader"],
                "parameters": [
                    {
                        "name": "url",
                        "in": "query",
                        "description": "Link TikTok?",
                        "required": true,
                        "schema": {
                            "type": "string",
                            "example": "https://vt.tiktok.com/ZS2NuNTUJ/"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Successful response",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": {
                                            "type": "boolean",
                                            "example": true
                                        },
                                        "developer": {
                                            "type": "string",
                                            "example": "DitzOfc"
                                        },
                                        "result": {
                                            "type": "string",
                                            "example": "Result link download of TikTok Downloader"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Error! url parameter is required"
                    },
                    "404": {
                        "description": "Resource not found or data is not valid"
                    },
                    "500": {
                        "description": "Internal server error"
                    }
                }
            }
        },
        "/chord": {
            "get": {
                "summary": "",
                "description": "Cocok buat elo yang suka gitaran😋👊",
                "tags": ["Search"],
                "parameters": [
                    {
                        "name": "query",
                        "in": "query",
                        "description": "Judul Lagu?",
                        "required": true,
                        "schema": {
                            "type": "string",
                            "example": "somebody pleasure"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Successful response",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "status": {
                                            "type": "boolean",
                                            "example": true
                                        },
                                        "developer": {
                                            "type": "string",
                                            "example": "DitzOfc"
                                        },
                                        "result": {
                                            "type": "string",
                                            "example": "Result of chord"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Error! query parameter is required"
                    },
                    "404": {
                        "description": "Resource not found or data is not valid"
                    },
                    "500": {
                        "description": "Internal server error"
                    }
                }
            }
        },
        "/remini": {
            "get": {
                "summary": "",
                "description": "Fetches and displays an enhanced image based on the given URL.",
                "tags": ["Tools"],
                "parameters": [
                    {
                        "name": "url",
                        "in": "query",
                        "description": "URL of the image to enhance",
                        "required": true,
                        "schema": {
                            "type": "string",
                            "example": "https://example.com/image.jpg"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Successful response with enhanced image",
                        "content": {
                            "image/jpeg": {
                                "schema": {
                                    "type": "string",
                                    "format": "binary"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Error! URL parameter is required"
                    },
                    "404": {
                        "description": "Resource not found or data is not valid"
                    },
                    "500": {
                        "description": "Internal server error"
                    }
                }
            }
        }
    }
};
    SwaggerUIBundle({
        spec: swaggerSpec,
        dom_id: '#swagger-ui',
        presets: [
            SwaggerUIBundle.presets.apis,
            SwaggerUIBundle.SwaggerUIStandalonePreset
        ],
        layout: "BaseLayout",
        deepLinking: true,
        filter: true
    });
};
