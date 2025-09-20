# Project Saaransh - Backend

This directory contains the server-side application for **Project Saaransh**. The backend is responsible for all core business logic, including data processing, running AI/ML models for analysis, and exposing a RESTful API for the frontend dashboard.

##  Overview

The backend is the engine of Project Saaransh. Its primary responsibilities are:

* **API Development:** Providing secure and efficient API endpoints for the frontend to consume.
* **Data Processing:** Ingesting, cleaning, and preparing the raw text comments submitted by stakeholders.
* **Machine Learning Inference:**
    * Performing sentiment analysis on each comment.
    * Generating concise summaries of long submissions.
    * Aggregating text data to generate word cloud statistics.
* **Database Management:** Storing and retrieving comments and their corresponding analysis results.



##  Technology Stack

* **Framework:** [FastAPI](https://fastapi.tiangolo.com/) for building high-performance APIs with automatic documentation.
* **Programming Language:** Python 3.10+
* **NLP / Machine Learning:**
    * [Hugging Face Transformers](https://huggingface.co/docs/transformers/index) for state-of-the-art sentiment analysis and summarization models.
    * [NLTK](https://www.nltk.org/) / [spaCy](https://spacy.io/) for text preprocessing (tokenization, stop-word removal).
    * [Scikit-learn](https://scikit-learn.org/stable/) for text feature extraction (e.g., TF-IDF for word clouds).
* **Database:** [PostgreSQL](https://www.postgresql.org/) for robust data storage.
* **ORM:** [SQLAlchemy](https://www.sqlalchemy.org/) for interacting with the database.
* **Server:** [Uvicorn](https://www.uvicorn.org/) as the ASGI server.
* **Dependency Management:** [Pip](https://pip.pypa.io/en/stable/) with a `requirements.txt` file.

##  Getting Started

Follow these instructions to set up and run the backend server on your local machine.

### Prerequisites

* Python (version 3.10 or later)
* Pip (Python package installer)
* A running instance of PostgreSQL (optional, can use SQLite for initial development).

### Installation & Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Create and activate a virtual environment:**
    * **Windows:**
        ```bash
        python -m venv venv
        .\venv\Scripts\activate
        ```
    * **macOS / Linux:**
        ```bash
        python3 -m venv venv
        source venv/bin/activate
        ```

3.  **Install dependencies:**
    This command will install all required Python packages.
    ```bash
    pip install -r requirements.txt
    ```

4.  **Configure Environment Variables:**
    Create a `.env` file in the `backend` directory by copying the example:
    ```bash
    cp .env.example .env
    ```
    Open the `.env` file and update the configuration variables, such as your database connection string:
    ```
    # Example for PostgreSQL
    DATABASE_URL="postgresql://user:password@localhost/saaransh_db"

    # Secret key for any JWT/authentication logic
    SECRET_KEY="your-super-secret-key"
    ```

5.  **Run Database Migrations (if applicable):**
    If you are using a tool like Alembic for database schema management, run the migrations.
    ```bash
    # Example command
    # alembic upgrade head
    ```
