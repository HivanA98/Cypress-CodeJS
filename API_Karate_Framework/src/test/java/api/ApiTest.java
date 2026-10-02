package api;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * Menjalankan semua feature di package "api" secara paralel.
 * Report HTML tersedia di target/karate-reports/karate-summary.html.
 */
class ApiTest {

    @Test
    void runAllFeatures() {
        Results results = Runner.path("classpath:api")
                .tags("~@ignore")
                .parallel(4);

        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }
}
