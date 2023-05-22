import logging


def get_logger(name: str) -> logging.Logger:
    logger = logging.getLogger(name)
    logger.setLevel(logging.DEBUG)
    ch = logging.StreamHandler()
    ch.setLevel(logging.DEBUG)
    ch.setFormatter(logging.Formatter("%(levelname)s:     %(asctime)s: %(message)s (%(name)s:%(lineno)d)"))
    logger.addHandler(ch)
    return logger
